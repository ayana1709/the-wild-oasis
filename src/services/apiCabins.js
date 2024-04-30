import supabase, { supabaseUrl } from "./supabase";

export async function getcabins() {
  const { data, error } = await supabase.from("Cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  //https://xpfdwijfffzqqravrhos.supabase.co/storage/v1/object/public/Cabin-images/cabin-001.jpg
  const imageName = `
${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `
  ${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}
`;
  const { data, error } = await supabase
    .from("Cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be created ");
  }
  //2.Upload Image
  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. Delete the cabin if there was an error uploading image
  if (StorageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    console.error(StorageError);
    throw new Error(
      "cabin image could not be uploaded and the cabin was not created "
    );
  }
  return data;
}
export async function delateCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }
  return data;
}

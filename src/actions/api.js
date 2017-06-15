/**
 * Created by pusti on 15.06.2017.
 */


export async function park(data){
  const URL = `http://maysternja.dataroot.co/catalog/park/`;
  await fetch(URL)
    .then(resp => resp.json())
      .then(j=>data=j)
      .catch(e => console.log("Error during park request",e));
  return data;
};

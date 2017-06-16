/**
 * Created by pusti on 15.06.2017.
 */

export const park = fetch(`http://maysternja.dataroot.co/catalog/park/`).then(resp => resp.json());
export const architecture = fetch(`http://maysternja.dataroot.co/catalog/architecture/`).then(resp => resp.json());
export const decoration = fetch(`http://maysternja.dataroot.co/catalog/decoration`).then(resp => resp.json());
export const instagram =(dispatch)=> fetch(`http://maysternja.dataroot.co/projects/`)
  .then(resp => resp.json())
  .then(payload => dispatch({
    type: "WORKS",
    payload: payload,}))
  .catch(error => console.log(error));
export const aboutUs =(dispatch)=> fetch(`http://maysternja.dataroot.co/about/`)
    .then(resp => resp.json())
    .then(payload => dispatch({
      type: "ABOUT",
      payload: payload,}))
    .catch(error => console.log(error));

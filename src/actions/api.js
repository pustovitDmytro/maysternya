/**
 * Created by pusti on 15.06.2017.
 */

export const park = fetch(`http://maysternja.dataroot.co/catalog/park/`).then(resp => {return resp.json()});
export const architecture = fetch(`http://maysternja.dataroot.co/catalog/architecture/`).then(resp => {return resp.json()});
export const decoration = fetch(`http://maysternja.dataroot.co/catalog/decoration`).then(resp => {return resp.json()});
export const instagram = fetch(`http://maysternja.dataroot.co/projects/`).then(resp => {return resp.json()});

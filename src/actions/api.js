/**
 * Created by pusti on 15.06.2017.
 */
export const park =(dispatch)=> fetch(`http://maysternja.dataroot.co/catalog/park/`)
  .then(resp => resp.json())
  .then(payload => dispatch({
    type: "WORKS",
    payload: payload,}))
  .catch(error => {dispatch({
    type: "WORKS",
    payload: [],});
    console.log(error)});
export const architecture =(dispatch)=> fetch(`http://maysternja.dataroot.co/catalog/architecture/`)
  .then(resp => resp.json())
  .then(payload => dispatch({
    type: "ARCH",
    payload: payload,}))
  .catch(error => {dispatch({
    type: "ARCH",
    payload: [],});
    console.log(error)});
export const decoration =(dispatch)=> fetch(`http://maysternja.dataroot.co/catalog/decoration`)
  .then(resp => resp.json())
  .then(payload => dispatch({
    type: "DECOR",
    payload: payload,}))
  .catch(error => {dispatch({
    type: "DECOR",
    payload: [],});
    console.log(error)});
export const instagram =(dispatch)=> fetch(`http://maysternja.dataroot.co/projects/`)
  .then(resp => resp.json())
  .then(payload => dispatch({
    type: "WORKS",
    payload: payload,}))
  .catch(error => {dispatch({
    type: "WORKS",
    payload: [],});
    console.log(error)});
export const aboutUs =(dispatch)=> fetch(`http://maysternja.dataroot.co/about/`)
    .then(resp => resp.json())
    .then(payload => dispatch({
      type: "ABOUT",
      payload: payload,}))
  .catch(error => {dispatch({
    type: "ABOUT",
    payload: [],});
    console.log(error)});

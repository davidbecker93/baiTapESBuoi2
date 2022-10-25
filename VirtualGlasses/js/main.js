import { Glass } from "../js/models/Glass.js";

let glassList = new Glass();
glassList.renderGlass('#vglassesList');
// glassList.getDataGlass();
window.getGlassItem = (id) => {
    glassList.getGlass(id);
    glassList.getInfo(id);
};
window.removeGlasses = (boolean) => {
    glassList.removeGlass(boolean);
}
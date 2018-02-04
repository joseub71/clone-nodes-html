
function instantiateText(text) {
	return text.replace(/\{\{(\w+)\}\}/g, function (_, name) {
		return values[name];
	});
}

function instantiate(node) {
	if (node.nodeType == document.ELEMENT_NODE) {
		var copy = node.cloneNode();

		for (var i = 0; i < node.childNodes.length; i++)
			copy.appendChild(instantiate(node.childNodes[i]));
		return copy;

	} else if (node.nodeType == document.TEXT_NODE) {

		return document.createTextNode(instantiateText(node.nodeValue));

	}
}

function moreCharacteristict(id) {

	//Se clona el elemento
	var newCharacteristics = instantiate(id)
	//Se clona el elemento

	//Nuevo id para el elemento ya clonado
	var newIdMore = newCharacteristics.id.split("_")
	var suma = newIdMore[1] != '1' ? parseInt(newIdMore[1]) + 1 : 2
	var newNodeMore = newIdMore[0] + "_" + suma

	newCharacteristics.setAttribute("id", newNodeMore);
	newCharacteristics.children[2].childNodes[1].setAttribute("onclick", "moreCharacteristict(" + newNodeMore + ")");
	//Nuevo id para el elemento ya clonado

	// Limpiar campos luego de clonar inputs
	newCharacteristics.children[1].children[2].value = ''
	newCharacteristics.children[0].children[2].value = ''
	// Limpiar campos luego de clonar inputs

	//Meter nodo en el DOM
	document.getElementById("characteristics").appendChild(newCharacteristics);
	id.children[2].childNodes[1].childNodes[1].setAttribute("class","icon-minus");
	id.children[2].childNodes[1].setAttribute("onclick", "removeCharacteristict(" + id.id + ")");
	id.children[2].childNodes[1].setAttribute("class", "circle-menus-char");
}


function removeCharacteristict(id) {
	id.parentNode.removeChild(id);
}

function moreFamily(id) {
	var newFamily = instantiate(id)
	var newIdMore = newFamily.id.split("_")
	var suma = newIdMore[1] != '1' ? parseInt(newIdMore[1]) + 1 : 2
	var newNodeMore = newIdMore[0] + "_" + suma
	newFamily.setAttribute("id", newNodeMore);
	newFamily.children[1].children[1].children[0].children[9].children[0].setAttribute("onclick", "moreFamily(" + newNodeMore + ")");

	newFamily.children[1].children[1].children[0].children[0].children[2].value = '' //P nombre
	newFamily.children[1].children[1].children[0].children[1].children[2].value = '' //S nombre
	newFamily.children[1].children[1].children[0].children[2].children[2].value = '' //P apellido
	newFamily.children[1].children[1].children[0].children[3].children[2].value = '' //S apellido
	newFamily.children[1].children[1].children[0].children[4].children[2].value = '' //Edad F
	//Parentezco no es necesario
	newFamily.children[1].children[1].children[0].children[7].children[2].value = ''   //Identificacion

	document.getElementById("family").appendChild(newFamily);
	id.children[1].children[1].children[0].children[9].children[0].setAttribute("onclick", "removeFamily(" + id.id + ")");
	id.children[1].children[1].children[0].children[9].children[0].setAttribute("class", "circle-menus-family");
	id.children[1].children[1].children[0].children[9].children[0].childNodes[1].setAttribute("class","icon-minus");
}

function removeFamily(id) {
	id.parentNode.removeChild(id);
}
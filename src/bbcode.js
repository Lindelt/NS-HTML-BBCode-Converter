/**
 * Script to insert BBCode elements around certain tags for NS dispatches
 */
function runAll () {
	// Floating
	wrapClass("float", "float", "data-float", "=left");
	// Alignment
	wrapClass("align", "align", "data-align", "=left");
	// Indentation
	wrapClass("tab", "tab", "data-tab", "=0");
	
	// Box
	wrapClass("box", "box");
	// Sidebar
	wrapClass("sidebar", "sidebar");
	wrapName("sidebar", "BLOCKQUOTE");
	
	// Bold
	wrapName("b", "B");
	wrapName("b", "STRONG");
	wrapName("b", "H1");
	wrapName("b", "H2");
	// Italic
	wrapName("i", "I");
	wrapName("i", "EM");
	wrapName("i", "H3");
	// Underline
	wrapName("u", "U");
	
	// Superscript
	wrapName("sup", "SUP");
	// Subscript
	wrapName("sub", "SUB");
	// Strike
	wrapName("strike", "STRIKE");
	wrapName("strike", "DEL");
	wrapName("strike", "S");
	
	// Unformatted Text
	wrapName("pre", "PRE");
	// Code (Forum Only)
	wrapName("code", "CODE");
	
	// Horizontal Ruler
	singlePos("hr", "HR", "afterend");
	
	// Links
	wrapName("url", "A", "href", "=#broken_link");
	// Anchors
	wrapClass("anchor", "anchor", "id", "=broken_anchor");
	// Nations
	wrapClass("nation", "nation", "data-nation");
	// Regions
	wrapClass("region", "region");
	// WA Proposal
	wrapClass("proposal", "proposal", "data-proposal");
	// WA Resolution
	wrapClass("resolution", "resolution", "data-resolution");
	// Quote
	wrapClass("quote", "quote", "data-quote");
	
	// Size
	wrapClass("size", "size", "data-size", "=100");
	wrapName("size", "H1", "data-size", "=150");
	// Font
	wrapClass("font", "font", "data-font", "=Helvetica");
	// Coloration
	wrapClass("color"
	         , "color"
			 , "data-color"
			 , "=red");
	wrapClass( "background"
	         , "background"
			 , "data-background"
			 , "=green");
	wrapClass( "background-block"
	         , "background-block"
			 , "data-background-block"
	         , "=blue");
	
	// Spoilers
	wrapClass("spoiler", "spoiler", "data-spoiler");
	
	// Lists
	wrapName("list", "UL");
	wrapName("list", "OL", "type", "=1");
	singlePos("*", "LI", "afterbegin");
	
	// Tables
	wrapName("table", "TABLE");
	wrapName("tr", "TR");
	wrapName("td", "TD");
	wrapName("td", "TH");
	
	// Image, requires custom handler, done as a closure
	(function (darg) {
		var tags = document.getElementsByTagName("IMG");
		for (i = 0; i < tags.length; i++) {
			var src = tags[i].getAttribute("src");
			var txt = `[img]${src != undefined ? src : darg}[/img]`;
			tags[i].insertAdjacentText("afterend", txt);
		}
	}("https://via.placeholder.com/150.png"));
}

/**
 * Function which takes a wrapping BBCode tag name and an HTML tag name
 * (e.g. "I", EM") and wraps the text whithin that tag in the appropriate
 * BBCode, possibly including an attribute.
 * @arg tag BBCode tag in which to wrap content
 * @arg tags Array of HTML tags to apply the BBCode wrapping to
 * @arg attr String representing an attribute field. Leave empty if no
 *           attribute fields are needed
 * @param darg default argument for the attribute if it is not found. Should
 *        be a string prefixed with an "=" sign (e.g. "=200")
 */
function wrapName (bb, tag, attr, darg = "") {
	var tags = document.getElementsByTagName(tag);
	for (i = 0; i < tags.length; i++) {
		var i_attr = tags[i].getAttribute(attr);
		var j_attr = i_attr ? `=${i_attr}` : darg
		tags[i].insertAdjacentText("afterbegin", `[${bb}${j_attr}]`);
		tags[i].insertAdjacentText("beforeend", `[/${bb}]`);
	}
}

/**
 * Function which takes a wrapping BBCode tag name and an HTML class and wraps
 * the text within those classes in the appropriate BBCode, possibly including
 * an attribute.
 * @param bb BBCode tag in which to wrap content
 * @param cls HTML class to apply the tag to
 * @param attr String representing an attribute field. Leave empty if no
 *        attribute fields are needed
 * @param darg default argument for the attribute if it is not found. Should
 *        be a string prefixed with an "=" sign (e.g. "=200")
 */
function wrapClass (bb, cls, attr, darg = "") {
	var tags = document.getElementsByClassName(cls);
	for (i = 0; i < tags.length; i++) {
		var i_attr = tags[i].getAttribute(attr);
		var j_attr = i_attr ? `=${i_attr}` : darg
		tags[i].insertAdjacentText("afterbegin", `[${bb}${j_attr}]`);
		tags[i].insertAdjacentText("beforeend", `[/${bb}]`);
	}
}

/**
 * Function to do a single-tag BBCode positioning on a given HTML tag
 * @param bb BBCode non-closing tag to insert
 * @param tag HTML tag to insert the BBCode tag into
 * @param pos adjacent positioning of the text. Either "beforebegin",
 *            "afterbegin", "beforeend", "afterend"
 */
function singlePos (bb, tag, pos) {
	var tags = document.getElementsByTagName(tag);
	for (i = 0; i < tags.length; i++) {
		tags[i].insertAdjacentText(pos, `[${bb}]`)
	}
}
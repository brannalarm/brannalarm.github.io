// Get HTML items
let input = document.getElementById("search");
let elements = document.getElementsByTagName("li");

// Focus text field
input.focus();

// Search through list elements
function search()
{
    for (let i = 0; i < elements.length; i++)
    {
        const current = elements[i];

        if (current.innerText.includes(input.value)) current.style.display = "";
        else current.style.display = "none";
    }
}

// Show point specific details
function showDetails(element)
{
    element.lastChild.style.display = "inline";
}

// Hide point specific details
function hideDetails(element)
{
    setTimeout(function ()
    {
        element.parentNode.style.display = ""
    }, 1);
}
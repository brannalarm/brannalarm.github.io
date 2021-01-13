// Search through list elements
function search()
{
    let input = document.getElementById("search");
    let elements = document.getElementsByTagName("li");

    for (let i = 0; i < elements.length; i++)
    {
        const current = elements[i];

        if (current.innerText.includes(input.value)) current.style.display = "";
        else current.style.display = "none";
    }
}
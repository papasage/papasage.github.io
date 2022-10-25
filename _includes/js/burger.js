if (window.addEventListener)
{
    window.addEventListener('load', burger);
}
else
{
    window.attachEvent('onload', burger);
}

function burger()
{
    let stateful_elements = document.getElementsByClassName("stateful");

    for (let i = 0; i < stateful_elements.length; i++)
    {
        let el = stateful_elements[i];
        button = document.getElementById(el.getAttribute("for"));

        button.addEventListener('click', function (e)
        {
            button.classList.toggle('active');

            new_height = 0;
            if (el.classList.toggle('active'))
            {
                for (let j = 0; j < el.children.length; j++)
                {
                    let child = el.children[j];
                    new_height += child.clientHeight;
                }
            }

            el.style.setProperty('max-height', new_height + "px", 'important');
        });
    }
};
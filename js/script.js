function f()
{
    if (window.location.search.length > 0)
    {
        query = window.location.search
        query = query.replaceAll("?",'')
        query = query.split("&")
        if (query.length == 2) // Type (Salade, Plats diverses , sucre , sale) ID =
        {
            first= query[0].split("=")
            second= query[1].split("=")

            if (first in ["salades","autres","sucre","sale"]){
                console.log(first[1],second[1])
            }

        }


    }
}





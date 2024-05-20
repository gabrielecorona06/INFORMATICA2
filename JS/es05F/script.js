tab=document.createElement("table")

for(i=1;i<11;i++)
{
    riga=document.createElement("tr")

    for(j=1;j<11;j++)
    {
        casella=document.createElement("td")

        casella.innerHTML=i*j
        riga.appendChild(casella)
        }



if(i%2==1)riga.setAttribute("class","grey")
tab.appendChild(riga)



}

document.body.appendChild(tab)



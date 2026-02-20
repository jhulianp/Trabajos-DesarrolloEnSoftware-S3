la_lista = ["mateo", "mariana", "felipe"]
print (la_lista[1])
la_lista.append("santiago")
print (la_lista[2])

print ("nuevos elementos")
la_lista.insert(1, "jadier")
print (la_lista[1])
print (la_lista[2])

la_lista.remove("jadier")
la_lista.pop(3)
print ("elementos luego de eliminarlos")
print (la_lista[1])
print (la_lista[2])

for l in la_lista:
    print (l)

if la_lista > 0:
    print ("la lista tiene elementos")
    
mi_diccionario = {"clave": "valor", "elemento1": 1, "otra cosa": "la otra cosa"}

"""print (mi_diccionario.keys())
print (mi_diccionario.values())
print (mi_diccionario.items())"""
print (mi_diccionario.get("Elemento", "No existe la clave"))

for clave, valor in mi_diccionario.items():
    print (f"campo: {clave} -> valor: {valor}")


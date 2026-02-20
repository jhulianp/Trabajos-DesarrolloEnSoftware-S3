nombre = ""
hobby = []

nombre = input("Ingrese su nombre: ")
hobby.append(input("Ingrese su hobby: "))
hobby.append(input("Ingrese otro hobby: "))
hobby.append(input("Ingrese otro hobby: "))


datos_ususario = {"nombre": nombre, "hobby": hobby}

for clave, valor in datos_ususario.items():
    print (f"campo: {clave} -> valor: {valor}")
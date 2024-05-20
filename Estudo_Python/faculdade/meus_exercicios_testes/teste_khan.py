import matplotlib.pyplot as plt

# Dados
h = -100  # Altitude inicial em metros
v = 5     # Velocidade de subida em metros por segundo

# Criando os valores de tempo (t) e altitude (A(t))
t_values = list(range(0, 21))  # De 0 a 20 segundos
A_values = [h + v * t for t in t_values]

# Plotando o gráfico
plt.plot(t_values, A_values, marker='o')

# Adicionando títulos e rótulos
plt.title("Relação entre Altitude e Tempo para Zenon")
plt.xlabel("Tempo (segundos)")
plt.ylabel("Altitude em relação à borda (metros)")
plt.grid(True)

# Exibindo o gráfico
plt.show()


# Testear no Jupyter web
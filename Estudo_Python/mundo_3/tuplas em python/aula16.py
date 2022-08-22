
print('-='*24)
print('-=-=-=-=- Aprendendo a manipular tuplas -=-=-=-=')
print('-='*24)

lanche = ('Hambúrguer', 'Suco', 'Pizza', 'Pudin', 'Batata Frita')
print(lanche) # [0], [-2], [2:], [:2], [-2:], [1:3], [-3:]
# também podemos imprimi-lo assim
print(sorted(lanche))

print('======================Fim============================' )

# Outra forma de manipular os dados da variavel tupla

print('------ maneira mais simples usando for ------')
for comida in lanche:
    print(f'Eu vou comer {comida} ')
print('-----------------fim------------------------')

print('------ outra maneira, pegando a posição ------')
for cont in range(0, len(lanche)):
    print(f'Eu vou comer {lanche[cont]} que esta na posição {cont}')
    
print('----! Mesmo exemplo sem range !----' )

# Mais uma forma de manipular os valores da variavel tupla 
for pos, comida in enumerate(lanche):
    print(f'Eu vou comer {comida} que esta na posição {pos}')
print('Comi pra caramba!')
print('-=-=-=-=-=-=-=-=-=-=-=-Fim=-=-=-=-=-=-=-=-=-=--=-=-=-' )


# Tuplas são imutáveis
print('provando que tuplas são imutáveis')
# lanche[1] = 'Refrigerante' 
# print(lanche[1])


print('===============================Fim====================================')
a = (2, 5, 4)
b = (5, 8, 1, 2)
c = b + a
print(c)
print(c.count(4))
print(c.index(5, 1)) # (c.index(5, 1))


print('===============================Fim====================================')
pessoa = ('Miguel', 17, 'M', 1.69)
# del(pessoa)
print(pessoa)
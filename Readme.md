# Resolução Case Holu Solar 2023 🌅

Olá, seja bem-vindo a resolução do case desenvolvido por mim, Gustavo Henrique. Abaixo, deixo a explicação e algumas considerações sobre o app. 
##
### 💻 O App
A solução foi desenvolvida em algumas etapas:
- A primeira foi entender o que o problema desejava;
- Em seguida, fiz o teste de mesa, onde testei os valores à serem recebidos e devolvidos e os cálculos;
- Após, escrevi o programa em Javascript, por ser uma linguagem que conheço mais profundamente, e realizei os testes manuais, uma vez que o programa é pequeno;
- Por último, refiz tudo adicionando o NodeJS e o Express.
<br>
Pelo o que ficou entendido, o problema já atribuia valores fixos à algumas variáveis, porém tomei a liberdade de permitir que o usuário forneça outros valores, pois assim o programa fica mais flexível e é possível testar outros valores.

##
### ⚙ Explicação
O programa tem três páginas: Boas-vindas, Instruções e o App. A ligação entre essas páginas foi feita no Node através do recursos de Rotas.<br>
Para a criação das páginas usei o Express, simulando o HTML e através delas fiz referências para o CSS e o Javascript, pois era a forma que me senti mais confortável em realizar a solução.
<br>
No Script, refenciei todos os elementos DOM para poder fazer as atribuições necessárias, uma vez que permiti a entrada de dados ao invés da utilização de valores fixos. Após, adicionei um evento no botão 'Enviar' que recolhe os dados inseridos nos campos de _input_. Ao receber, verificamos se o valor é um número, caso não seja, ele imprime uma mensagem para corrigir o valor inserido, caso seja, o campo segue em branco e cada valor é atribuido a sua devida variável. Feito isso, vamos ao cálculos:
- Para retornar a quantidade de placas, peguei a potência total do sistema, recebida em kW, convertemos para W e dividimos pela potência de cada placa, recebida em W. Para esse caso, decidi arredondar o valor da divisão para cima, pois entendo que não podemos ter 1/3 de uma placa, e que o valor menor que a divisão, não seria o suficiente para atender a potência do sistema;
- Para a quantidade de inversores, peguei a quantidade de placas e dividi por quatro, uma vez que um inversor atende quatro placas, e arredondei para cima, pelo mesmo motivo do item acima;
- Para o comprimento da estrutura necessária, peguei o comprimento de cada placa e multipliquei pelo numeros de placas;
- Por fim, para Área útil do sistema, usei o metro quadrado de cada placa e também multipliquei pelo números de placas;
- Assim devolvi ao usuário os valores em cada _div_, de acordo com a tela do sistema.

##

### ❓ Como usar?

O uso do programa é simples: Basta você informar a potência total do sistema em kW, o valor de cada placa em W, o comprimento e a largura das placas. Os campos estão bem identificados qual valor deve receber.
*Todos os numeros devem ser separados por ponto e não por vírgula* 
Para receber os valores na tela, basta clicar no botão 'Enviar'.

## 
⌨ com 🤍 por [Gustavo Henrique](https://github.com/1910gstv)

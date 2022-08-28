# Boas vindas ao repositório do projeto App de Delivery!


<details>
  <summary>
    <strong>👨‍💻 O que foi desenvolvido</strong>
  </summary><br>

  Esse projeto é responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍻

  A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

  Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

  Como seu antigo sistema, que era um conjunto de planilhas, já não atendia a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. O aplicativo contém:

  - Acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, tem acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
  - Fazem a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos possuem detalhes sobre seus pedidos;
  - Se a pessoa cliente faz o pedido, o mesmo aparece para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, tem as informações sobre seu pedido quando sua página for atualizada, ou seja, tem informações se o pedido está sendo preparado ou se já saiu pra entrega;

  Sua equipe, que já possui uma boa experiência com desenvolvimento, em pouco tempo apresentou um [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=0%3A1) e um [Diagrama de ER](./assets/readme/eer.png) conforme imagem:

  ![Diagrama de ER](./assets/readme/eer.png)

</details>


<details>
  <summary>
    <strong>🏦 Banco de dados e Sequelize</strong>
  </summary><br>

  ## Banco de dados

  Para o banco de dados, utilizamos o ORM `Sequelize`, que faz interface com o `MySQL`.
  - Para referência de `migrations` e `seeders` o arquivo `./db.example.sql`;
  - O [Diagrama de ER](./assets/readme/eer.png) também pode ajudar a "visualizar" o banco de dados;

  ## Sequelize

  - O projeto já provê uma estrutura inicializada do ORM (em `./back-end/src/database`). Seguindo o modelo em `./db.example.sql` (esse arquivo serve como referência, e não tem qualquer influência sobre a aplicação).
  - Esse projeto fornece por padrão o arquivo `.sequelizerc` em `.back-end` para configurações do padrão de pastas no Sequelize.
</details>



<details>
  <summary>
    <strong> ℹ️ Data-testids do Projeto</strong>
  </summary><br>

  O data-testid de cada elemento que foi usado no projeto está no arquivo [data-testids.md](data-testids.md) na raiz do projeto. Cada um desse elementos tem no [protótipo do figma](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A391) um número, e nesse arquivo, o `data-testid` que foi atribuído ao valor de tal. 


</details>


<details>
  <summary>
    <strong>👷 Estruturação do projeto</strong>
  </summary><br>

  Para facilitar o entendimento, podemos dividir a aplicação em **4 fluxos principais**, **uma validação de status entre cliente e pessoa vendedora** e **cobertura de testes (`front-end` e `back-end`)**:

  - **Fluxo Comum** que compreende: 
    - (1) Tela de Login (`01login.test`); 
    - (2) Tela de Registro (`02register.test`).

  - **Fluxo do Cliente** que compreende: : 
    - (3) Tela de Produtos (`03customer_products.test`); 
    - (4) Tela de Checkout (`04customer_checkout.test`); 
    - (5) Tela de Pedidos (`05customer_orders.test`); 
    - (6) Tela de Detalhes do Pedido (`06customer_order_details.test`).

  - **Fluxo da Pessoa Vendedora** que compreende: 
    - (7) Tela de Pedidos (`07seller_orders.test`); 
    - (8) Tela de Detalhes/Controle do Pedido (`08seller_order_details.test`).

  - **Validação do Status do Pedido** que compreende: 
    - (9) Teste de status (`09customer_seller_status_sync.test`); 

  - **Fluxo da Pessoa Administradora** que compreende: 
    - (10) Tela de gerenciamento de usuários (`11admin_manage_users.test`).

  - **Testes da aplicação** que compreende: 
    - (11) Testes de cobertura (`12coverage_tests.test`).

    - Do cliente: `/customer/products`,
    - Da pessoa vendedora:  `/seller/orders`,
    - Da pessoa administradora: `/admin/manage`

</details>

<details>
  <summary>
    <strong>🎨 Construção do Front-end e Componentização</strong>
  </summary><br>

  ## Construção do Front-end

  - Foi utilizado esse [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=0%3A1) para se guiar na construção do front-end. Esse arquivo é comentado com os nomes de cada elemento.

  - ⚠️**Importante**: nosso banco de imagens pode ser [baixado aqui](./assets/images.zip);


  ## Componentização

  O nosso [protótipo](https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Delivery-App-new-trybeer?node-id=977%3A391) possui um conjunto de **componentes base**. Isso é proposital e sugere que é fundamental a componentização do front-end de maneira que seja possível fazer o maior reaproveitamento possível de cada estrutura.

</details>

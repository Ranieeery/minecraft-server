# Modpack

## FAQ

###### Porque essas seção chama Frequently Asked Questions se ninguém perguntou nada?

Não sei.

###### Como sei que o modpack está atualizado?

Como houve um período de teste antes do servidor, é esperado que não tenha atualizações client side porém é algo que pode ocorrer. Para isso, há um sistema de compatibilidade que verifica se está compatível com a versão exigida no servidor. Se antes de entrar aparecer ✅, está devidamente atualizado (ou eu esqueci de atualizar o arquivo de verificação...). Se aparecer ❌, está desatualizado e é necessário uma atualização para jogar.
Instalações originais podem atualizar diretamente pelo app do CurseForge. Instalações não genuínas deverão baixar no drive disponibilizado e seguir o README.txt de atualização atentamente. Pode ser que tenha como instalar pelo CurseForge através de uma ferramenta third party, porém como não faço uso não consigo confirmar as minhas suspeitas.

###### O que cada mod faz?

Para uma explicação breve vá para a sessão de [glossário](#glossário). Mods pulados são bibliotecas ou funcionalidades de otimização ou servidor (como o Accelerated Decay que apenas reduz o tempo de duração das folhas da árvore para evitar verificação delas a cada tick).

###### Aquele mod de sistema de baús vai estar no modpack?

O Simple Storage Network não recebe atualizações desde dezembro do ano passado, portanto não estará presente. Cogitei a possibilidade de realizar um fork e atualizar as dependências porém
a biblioteca base dele também está parada e para isso seria necessário um trabalho que poderia levar algumas semanas de trabalho. Além disso, na 1.21 houve mudanças impactantes tanto na estrutura do jogo com otimizações em chunks quanto no cenário de mods com a ascensão do NeoForge, atualmente não compatível com Forge e por conta disso não é viável um downgrade.

###### O Infinity Ham do Relics está presente neste modpack?

Embora o mod do @Relics esteja presente, o infinity ham não pode ser obtido como forma de incentivar a explorarem outros recursos.

###### Porque o Ultimine (") está pegando até 9 blocos? O limite padrão é 64

Porque é roubado demais. Foi cogitado a possibilidade de ferramentas específicas de outro mod para isso porém o ultimine foi mantido por ser um sistema já conhecido e esperado de se ter em um pack.

###### Como eu reduzo/removo essa névoa branca na renderização?

Options > Video Settings > Sodium Extra (na esquerda) > Render > Single Fog

Colocando 10 chunks, limite do servidor, a fog estará desabilitada

###### Não consigo ir para o Nether, como prosseguir?

Esse é o comportamento esperado no começo do jogo. As dimensões serão liberadas progressivamente de forma a garantir uma experiência mais gradual. O Nether será liberado na segunda feira (25/08) e o The End ainda está com uma data indeterminada

## Pesquisa de itens

**@create**: pesquisa todos os itens de um mod chamado "create"
**\#stone**: pesquisa todos os itens que possuem "stone" nas suas tags (i.e. \#armor, \#food etc.)
**$sharpness**: pesquisa todos os itens que possuem "sharpness" em uma tag que identifica o item, pode ser usado para buscar encantamentos específicos, poções com efeito, etc.
**\*log**: pesquisa todos os itens que possuem "log" no seu id

## Atalhos

Ver receita: R sobre o item (recipe)
Ver em quais receitas um item é utilizado: U sobre o item (utility)
Para passar a ver o id e durabilidade dos itens: F3 + H
Para ver as chunks: F3 + B
Para recarregar as chunks (pode ajudar em casos de lag): F3 + A

## Dicas gerais

- Pressionando aspas (") no teclado ao quebrar um bloco, é possível quebrar até 9 blocos de uma vez. Atente-se que quebrar desta forma consome durabilidade equivalente da ferramenta e consome um pouco da barra de fome

- Paragliders são baratos e certamente irão te ajudar durante a exploração

- Lava é um recurso essencial para avançar no Create, estabeleça um tanque para que possa ser de fácil acesso

<font color="#ffff00">Pode ser viabilizado um único trem que passe por todas as bases e distribua lava por elas. Para isso todas estações de recebimento deverão ser parcialmente padronizadas</font>

- Fluidez de líquidos é uma das mecânicas que mais causam lag no jogo, passado o começo do jogo priorize usar steam engine (recomendado) ou outras fontes alternativas como source motor ou (integração Ars com Create)

- @Comforts possui camas portáteis que não marcam spawn, útil para dormir durante aventuras sem se preocupar, e redes que permitem dormir de dia para anoitecer

- Há várias estruturas com itens do Create pelo mundo, elas podem te ajudar a ter um early/mid game mais produtivo

- Extruders certamente serão úteis para farmar alguns blocos básicos e alguns destes podem ser processados para gerar os principais minérios do modpack

- Fan Catalyst é uma forma mais viável de usar e trocar modos no Encased Fan (@Create)

- Paragliders podem ser usados em conjunto com jetpacks ou Grapplin Whisk (item parecido com o DMT de Shingeki no Kyojin)

- @Utilitarian, como o nome sugere, adiciona alguns itens utilitários. O snad por exemplo faz com que cana e cactos cresçam mais rápido

- @Gateways permite fácil acesso a alguns loots de mobs finalizando um certo desafio

- Copycats são uma boa alternativa à Framed Blocks. Um adendo que o uso de ambos em excesso pode reduzir o FPS

- Flawless budding do Applied pode ser pego com contraptions do Create

- @FunctionalStorage é recomendado para armazenar itens únicos/fluidos e possui alguns utilitários interessantes como gerador de água, lava e pull/push upgrades

- @Create:connected é um addon que pode facilitar farms usando o Create visto que possibilita novas forma de conectar estruturas

- Para utilizar um sistema de itens (Ars, Create e/ou Applied) é recomendável utilizar barris ou baús do @SophisticatedStorage

- É possível criar lojas com o Create, de forma que qualquer recurso que você farme em excesso pode ser convertido em outro enquanto supre a necessidade de outros jogadores

### Sistema de itens

#### Applied Energistics 2

Itens necessários:

- 1 ME Controller
- 1 ME Crafting Terminal
- 1 ME Storage Bus ou ME Drive + ME Item Storage Cell

#### Ars Nouveau

Itens necessários:

- 1 Storage Lectern
- 1 Bookwyrm Charm
- 1 Dominion Wand

Para acessar "wi-fi" na mesma dimensão:

- Glyph of Interact
- Enchanter's Eye
- Scry Crystal
*Pode ser usado para o Applied também. Há a possibilidade de usar com o Create mas implicaria no uso de 2 controles portanto não recomendo

#### Create

Itens necessário

- 4 Packager
- 2 Barrel
- 2 Chute
- 1 Lever
- 1 Stock Link
- 1 Stock Ticker
- 1 Seat
- 1 mob ou Blaze Burner
- 9+ Vault

| Mod                      | AE2  | Ars Nouveau | Create |
| ------------------------ | ---- | ----------- | ------ |
| **Custo**                | Alto | Médio       | Baixo  |
| **Crafting grid**        | ✅    | ✅           | ❌      |
| **Expansível**           | ✅    | ✅           | ✅❌     |
| **Integração**           | ✅    | ✅❌          | ✅❌     |
| **Complexidade inicial** | Alta | Média       | Baixa  |
| **Flexibilidade**        | Alta | Baixa       | Baixa  |

Recomendação: Usar o Storage Controller (@SophisticatedStorage) e/ou o Storage Controller (@FunctionalStorage) para linkar inventários, unindo tudo a poucos blocos ao invés de múltiplos baús

@SophisticatedStorage é melhor para guardar vários itens diferentes
@FunctionalStorage é melhor para guardar fluidos ou itens únicos em grandes quantidades

## Observações importantes

Para usar o Ender Chest modificado é necessário definir uma frequência para sincronizar dois ou mais baús e isto é feito a partir dos corantes disponíveis no jogo. A frequência é definida a partir de uma sequência de três cores definidas pelo jogador que podem ser ou não iguais.
De forma a prevenir que frequências de cores iguais sejam utilizadas, caso vá usar o mod peço que entre em contato para que possa ser definido uma cor base para o jogador utilizar sempre ao definir a primeira frequência de forma a evitar essa situação

*Exemplo de uso:*
> O Player1 está minerando e coloca todos os seus minérios em um Ender Chest com frequência Vermelho - Azul - Azul para serem processados automaticamente. O Player2 por sua vez está fazendo uma de madeira que insere automaticamente no sistema de itens dele através de um Ender Chest com a mesma frequência utilizada pelo Player1, nisso abre margem para três possibilidades:
> 1- Os minérios do Player1 podem parar diretamente no sistema de Player2
> 2- Os trigos de Player2 podem ser processados erroneamente pelo Player1, podendo travar a farm por conta de um item não esperado ou acarretando na perda permanente dos trigos
> 3- Se uma operação não sobrepor a outra, parte dos trigos de Player2 pode ir para Player1 e parte dos minérios de Player1 podem ir para Player2
>
> Este problema poderia ser evitado se estivesse definido para as frequências de Player1 sempre começarem com Azul e as de Player2 com Vermelho

#### Cores disponíveis

| **Cor**    | **Jogador** |
| ---------- | ----------- |
| White      |             |
| Light Gray |             |
| Gray       |             |
| Black      |             |
| Brown      |             |
| Red        |             |
| Orange     |             |
| Yellow     |             |
| Lime       |             |
| Green      |             |
| Cyan       |             |
| Light Blue |             |
| Blue       |             |
| Purple     |             |
| Magenta    |             |
| Pink       |             |

## Tutoriais

### Applied Energistics 2

Tutorial em texto (inglês): <https://allthemods.github.io/alltheguides/mods/ae2/>

Tutorial em vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SyU2B2V4XL4?si=bZGYVvSKyQ3zrBGP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/qIV2BhU2Fh0?si=ElhRWzT6ItUPtgVP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Apotheosis

Tutorial em texto para setup completo na 1.21.1 (inglês): <https://allthemods.github.io/alltheguides/atm10/apothicenchanting/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/5xRny0qYPkQ?si=H-sv3b2mEL4tRto6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

OBS: A parte de chefes e joias presentes no vídeo NÃO fazem parte do modpack

### Ars Nouveau

<iframe width="560" height="315" src="https://www.youtube.com/embed/GLSCfUioZIE?si=BBm5FwGA3txr8gC1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/4UiD1vJ5Pvk?si=qsgyfZRhYOB1CJih" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/x5Gqu1j2SPc?si=XINZ4D-qEllDzfX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/3D4P3jL5hDs?si=WsR6FspHyMcz4Cko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Create

<iframe width="560" height="315" src="https://www.youtube.com/embed/GVfQFXXPQTA?si=bToAIm20hM_OScyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Wlfn0mC0_3g?si=VkFpHSNEiEQ9xT7F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VWyeOTvaQtU?si=oZfUEYYOYl1euxlp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/a3pFuVOkpHk?si=SIOvhBPSAVB5aY7n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Fi1dfC9PIZw?si=c22UQ8Z3p8N3PH-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2Oyc2IcGtXM?si=x9nFMwqOhlEfmscB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Functional Storage

<iframe width="560" height="315" src="https://www.youtube.com/embed/5e3c1CVvpl8?si=VbTzm2MGLpUV_UdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Just Dire Things

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ba1BVMAR4jI?si=PPyuWmqX4tz5_KQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Pipez

<iframe width="560" height="315" src="https://www.youtube.com/embed/VMGYMADDfMQ?si=YUK6_ki9DTIXJguB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Glossário

- **Amendments**: Complemento do Supplementaries, que aumenta o escopo de utilização de alguns blocos e permite algumas decorações bacanas.
- **Apothic Enchanting**: Reformulação do sistema de encantamentos no jogo e correções de uso de XP. O sistema que você conhece ainda funciona porém ele foi aprimorado para mais níveis.
- **Apothic Spawners**: Reformulação dos spawners de maneira a permitir manipulação de status e geração de recursos.
- **AppleSkin**: Mostra saturação dos alimentos, mecânica presente no jogo vanilla mas oculta ao player por algum motivo.
- **Applied Energistics 2**: Mod de gerenciamento de itens que existe e permite você automatizar processos do seu mundo inteiro. Os addons disponíveis para complementar a experiência são:
  - AE2 Import Export Card
  - AE2 Network Analyser
  - AE2 Crafting Tree
  - AEInfinityBooster
  - Applied Energistics 2 Wireless Terminals
  - Applied Flux
  - Applied Schematicannon
  - ExtendedAE
  - ME Requester
  - MEGA Cells
- **Ars Nouveau**: Mod de magia que permite você construir magias com efeitos praticamente ilimitadas a partir de glifos. ex: Um glifo de 'quebrar' com um de 'lançar' dispara um projetil que quebra o bloco atingido. Adicionando um glifo de 'ampliar' a área quebrada aumenta. Os addons disponíveis para complementar a experiência são:
  - Ars Creo
  - Ars Énergistique
  - Ars Technica
- **Artifacts**: Neste modpack, considere como um mod que adiciona relíquias equipáveis com efeitos diversos como reduzir dano, resistência a efeitos negativos, voo temporário, etc. Está integrado ao **Relics** que desempenha a mesma função. Como o Relics é o principal que integra ambos, os addons estão associados a este, sendo eles:
  - Relics: Artifacts Compat
  - Reliquified Ars Nouveau
- **Building Gadgets**: Aparelhos que permitem você construir, clonar construções e destruir partes de alguma de maneira facilitada.
- **CC: Tweaked**: O Computer Craft citado anteriormente. Adiciona computadores programáveis na linguagem Lua que executam scripts reais dentro do jogo. Os addons disponíveis para complementar a experiência são:
- Advanced Peripherals
- **Comforts**: Adiciona redes para dormir durante o dia para anoitecer e camas portáteis que não mudam o seu spawn point.
- **Construction Sticks**: Adiciona varetas que ampliam o conteúdo de blocos adjacentes para uma direção escolhida.
- **Create**: Mod central do modpack, adiciona partes de maquinários que unidos desempenham determinada função a depender da disposição dos elementos. Os poucos addons disponíveis para complementar a experiência são:
  - Create Crafts & Additions
  - Create Jetpack
  - Create Mechanical Extruder
  - Create Mechanical Spawner
  - Create Ore Excavation
  - Create Stuff 'N Additions
  - Create: Apothic Enchanting
  - Create: Aquatic Ambitions
  - Create: Bells & Whistles
  - Create: Central Kitchen
  - Create: Connected
  - Create: Copycats+
  - Create: Curios Jetpack & Backtank
  - Create: Dreams n' Desires
  - Create: Easy Structures
  - Create: Enchantable Machinery
  - Create: Enchantment Industry
  - Create: Ender Link
  - Create: Hypertubes
  - Create: Integrated Farming
  - Create: Let The Adventure Begin
  - Create: Mechanical Botany
  - Create: Pillager Arise
  - Create: Rustic Structures
  - Create: Simple Generator
  - Create: Simple Ore Doubling
  - Create: Trading Floor
  - Create: Ultimate Factory
  - Rechiseled: Create
  - Sophisticated Backpacks Create Integration
  - Sophisticated Storage Create Integration
- **Dis-Enchanting Table**: Mesa para remover encantamento de itens.
- **Dramatic Doors**: Variedades de portas para decoração.
- **Ender Storage 1.8.+**: Adiciona baús do ender variados com diversas frequências, permitindo transporte wireless de itens/fluidos.
- **Explorer's Compass**: Bússola para buscar estruturas.
- **Extreme sound muffler**: Permite você diminuir ou mutar sons específicos do jogo, como aquele do portal do nether que ninguém gosta.
- **Farmer's Delight**: Mod de cozinha que adiciona várias receitas ao jogo junto com métodos de preparação diversos.
- **Flux Networks**: Transporte de energia wireless.
- **Forbidden and Arcanus**: Mod de magia simples a base de rituais que permite adicionar atributos permanentes a itens, como deixar itens inquebráveis.
- **FramedBlocks**: Adiciona várias formas (até triangular) de blocos ocos que podem ser preenchidos por qualquer bloco.
- **Functional Storage**: Adiciona gavetas que permitem o armazenamento de um item/fluido em grande quantidades. Possui upgrades utilitários que facilitará sua vida saber utilizar.
- **Gateways to Eternity**: Permite chamar portais que invocam hordas de mobs com grandes recompensas caso finalize no tempo proposto. Atente-se que algumas possuem penalidades para o jogador.
- **Handcrafted**: Mod de decoração, adiciona vários itens com este intuito.
- **Iron Furnaces**: Adiciona upgrades da fornalha vanilla para melhorar a velocidade dos processos, também adiciona uma forma de gerar energia mas praticamente todo mundo ignora esta parte do mod.
- **JourneyMap**: Adiciona o minimapa que você visualiza o tempo inteiro e um mapa interativo das áreas exploradas pelo jogador.
- **Just Dire Things**: Mod que adiciona blocos específicos voltados para automação e itens com funcionalidades inusitadas.
- **L_Ender 's Cataclysm**: Adiciona bosses poderosos com mecânicas específicas de luta, os drops provavelmente são os itens mais fortes possíveis de obter no modpack.
- **Living Things**: Adiciona animais com modelos 3d peculiares, mas é a opção disponível para adicionar vida animal ao jogo.
- **Lootr**: Loot individual de baús para cada jogador.
- **MmmMmmMmmMmm**: Adiciona um boneco de teste pra você bater e ver seu dano, só isso.
- **Nature's Compass**: Variante do Explorer's Compass que busca biomas ao invés de estruturas.
- **Paragliders**: Adiciona paraquedas baseados em Zelda: Breath of the Wild. Também adiciona um sistema de trocas para conseguir mais vida e stamina (utilizada para aumentar o tempo no ar).
- **Polymorph**: Com múltiplos mods é possível que uma receita ou outra seja igual porém para itens diferentes. o Polymorph adiciona um seletor de receita quando detecta alguma duplicada e assim você pode garantir que está craftando o item correto.
- **Pipez**: Mod simples de canos de transporte de itens, fluidos e energia como alternativa as formas disponíveis no Create que não são tão usuais.
- **Pylons**: Adiciona blocos de efeitos diversos como expulsar jogadores de uma região, colher automaticamente, reproduzir efeitos no jogador e evitar spawn de mobs específicos em uma região.
- **Rechiseled**: Adiciona variações de texturas de blocos mantendo seus aspectos originais.
- **Repurposed Structures**: Variações aprimoradas de estruturas vanilla.
- **Ribbits**: Alerta de fofura: Adiciona sapinhos que plantam, pescam e podem tocar instrumentos.
- **Security Craft**: Adiciona itens de segurança para proteger a sua base do amiguinho sacana.
- **Simple Voice Chat**: Adiciona VoIP ao jogo, permitindo a comunicação por voz entre jogadores pelo próprio servidor.
- **Simplest Paxels**: Adiciona ferramentas que unem funcionalidades de picareta, machado e pá em uma única ferramenta.
- **Simply Light**: Adiciona variações de blocos para iluminação.
- **Sophisticated Backpacks**: Adiciona mochilas personalizáveis com diversos upgrades utilitários.
- **Sophisticated Storage**: Adiciona baús maiores com diversos upgrades utilitários.
- **Supplementaries**: Adiciona pequenas adições de bloco que embora funcionais servem mais para decoração.
- **Torchmaster**: Adiciona lâmpadas potentes que podem iluminar toda uma área e blocos que podem remover o spawn de criaturas hostis ou passivas em uma região.
- **Trash Cans**: Adiciona lixeiras diversas para jogar algum recurso indesejado de alguma farm fora de maneira automática.
- **TrashSlot**: Um slot de lixo no seu inventário.
- **Utilitarian**: Adiciona blocos, receitas e itens utilitários além de recursos que melhoram a gameplay.
- **Waystones**: Totem de viagem que permite ir rapidamente de um local ao outro, essencial para se ter em uma base.
- **When Dungeons Arise**: Adiciona dungeons bonitas, desafiadoras e muito bonitas ao jogo.
- **Wither Skeleton Tweaks**: Melhorias no Wither Skeleton e adição de novos itens voltado para o mob.
- **WITS (What Is This Structure?)**: Comando /wits para descobrir a estrutura atual do jogador.

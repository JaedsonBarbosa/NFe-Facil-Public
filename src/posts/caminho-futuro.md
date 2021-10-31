---
title: Caminho futuro
---

# {{ title }}

Planejamento é essencial para garantir o sucesso desta empreitada, pois é essencial saber o que ainda falta ser implementado para que os próximos passos possam ser dados de forma inteligente. Não direi aqui prazos específicos, mas a maioria das novidades detalhadas aqui em baixo será implementada até o final de 2022. Novidades muito técnicas também não serão detalhadas aqui, pois sei que não são do interesse da maioria.

## Controle de estoque

Manter o controle das quantidades de produtos e suas localizações pode ajudar na tarefa de emissão fiscal, além de que controlar as saídas com base nas notas emitidas, torna tudo muito mais simples. Quanto às entradas de mercadorias, elas poderão ser feitas com a emissão de notas fiscais de entrada ou usando alterações manuais de estoque.

Um adicional que pode ser implementado futuramente é a possibilidade de gerar uma estante virtual para sua loja usando apenas os dados cadastrado no emissor fiscal. Não há planos para ser uma loja completa, apenas para que os pedidos possam ser montados e a execução do pedido (pagamento, cálculo de frete, entrega, comunicação e emissão da nota fiscal) fique inteiramente por conta de sua empresa. A vantagem dessa abordagem é que você poderia efetuar vendas sem me pagar nenhuma taxa por venda.

## Busca de dados cadastrais por CNPJ

Para emitir notas fiscais destinadas a um CNPJ, é necessário fazer o seu cadastro, inserindo todas as informações de forma correta. Pelo menos, é assim na maioria dos emissores. A ideia aqui é que, usando apenas o CNPJ e a UF da empresa, seja possível obter os demais dados cadastrais automaticamente, poupando tempo na hora de emitir a nota fiscal.

## Busca de produto pelo código de barras

Essa é uma necessidade de todo emissor de NFC-e, afinal as vendas precisam ser feitas com agilidade. A diferença é que, além de suportar os tradicionais leitores de códigos de barras que todos conhecemos, também planejo tentar implementar a leitura usando a câmera do celular, o que poderia ser extremamente útil para os pequenos mercadinhos, que seriam beneficiados por não precisar arcar com a compra do leitor tradicional.

## Relatórios

As notas fiscais emitidas fornecem métricas importantes para a empresa, como quantidade de vendas, receita gerada por cada produto/setor de produtos, clientes que mais compraram, funcionários que mais venderam, dias mais movimentados, horários de pico...

Simplesmente existe um mar de informações que pode ser extraído das notas emitidas, são tantas métricas disponíveis que é possível se perder no meio de tanta informação, e como um dos objetivos do aplicativo é ser fácil, a meta é não exagerar e só criar aquilo que for mais relevante. Por isso, eu recomendo que todos os usuários me dissessem quais as métricas mais relevantes para suas empresas.

## Novidades caso haja demanda

As novidades abaixo não são essenciais para a maioria das empresas emissoras, mas caso haja um número razoável que as peça (falando comigo por qualquer um dos canais dispostos no rodapé da página), elas serão implementadas.

### Carta de correção

Esse é um recurso problemático, pois a "correção" que ele propõe fazer é simplesmente um texto solto, não há alteração no XML, que continuará com a informação errônea para sempre. Ter a possibilidade de usá-lo pode diminuir a atenção do emissor, afinal ele poderá registrar uma carta de correção caso erre algo. O ideal continua sendo manter a atenção durante a emissão e não errar.

### Adição de transportador em notas já emitidas

Isso é útil para liberar o acesso ao XML para o transportador caso a nota fiscal tenha sido emitida sem informar quem seria o transportador. Por mais que esse seja um evento útil, temos que o XML da nota não será alterado e ele não será informado no DANFE, por exemplo. O ideal continua sendo informar o transportador na nota fiscal.

### Liberação de emitente pessoa física

Recentemente foi liberado pela SEFAZ para que produtores rurais possam emitir NF-es usando apenas o CPF. É uma liberação útil, porém ela adiciona mais complexidade ao projeto e eu não sei quantos estariam interessados nesse recurso.

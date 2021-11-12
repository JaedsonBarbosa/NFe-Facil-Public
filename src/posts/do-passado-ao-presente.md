---
title: Do passado ao presente
date: 2021-10-31
---

# {{ title }}

> Este é um texto destinado a todos aqueles que usaram a primeira versão do NF-e Fácil, que era desenvolvida em UWP e compatível apenas com o Windows 10.

A primeira versão do NF-e Fácil teve seu desenvolvimento iniciado no final de 2016, durando até dezembro de 2019, quando a última atualização foi lançada e mandei uma mensagem a todos os usuários informando sobre o encerramento da manutenção no aplicativo, deletando em seguida o grupo por onde eu mantinha contato com todos.

Os motivos para o encerramento da versão UWP do projeto foram muitos e eles serão detalhados adiante no texto, mas quando ele ocorreu eu não estava pensando em desistir completamente do projeto, apenas precisava de uma pausa para que uma nova versão fosse planejada e construída, dessa vez com as mudanças pedidas e necessárias para garantir que desta vez não passemos pelos mesmos problemas enfrentados na versão UWP.

## Fim da versão UWP

O desenvolvimento de um sistema desse tipo para o UWP trouxe consigo muitos desafios, aqui detalharei alguns motivos que foram, no mínimo, motivo de aborrecimento, sem falar de alguns problemas no projeto, foram eles: 

1. Não havia biblioteca de assinatura XML disponível na época, sendo necessário que eu passasse meses fazendo essa função eu mesmo;
2. A Microsoft não permitia que os certificados fossem diretamente acessados pelo aplicativo, sendo necessária uma aplicação à parte para que certificados A3 pudessem ser usados;
3. Não havia nenhuma biblioteca para impressão térmica, fazendo com que a qualidade de impressão das NFC-es fosse inaceitável;
4. O fim do Windows 10 Mobile acabou com os planos do aplicativo ser usados em celulares, o que era um dos grandes diferenciais na época;
5. Metade das pessoas que entravam em contato pedindo informações queriam usar a aplicação em sistemas não suportados, especialmente o Windows 7 e o Android.
6. Nenhuma solução de nuvem era adotada, o que fazia com que a sincronização de dispositivos fosse muito complexa, pois ela ocorria pela rede local e toda a sincronização de dados era implementada manualmente por mim mesmo, sendo então uma origem potencial de erros;
7. O DANFE da NF-e foi totalmente implementado por mim e ele sozinho ocupava quase 20% das linhas de código da aplicação;
8. Não haviam testes automáticos, ou seja, se eu fizesse alguma alteração no código que "quebrasse" outra parte, eu só descobriria ou testando manualmente ou quando algum usuário me relatava;
9. O projeto estava muito atrasado, pois ele havia sido construído usando como base o Manual de Orientação do Contribuinte, versão 6.0, lançado em 2015, e até o dia final ainda não havia sido implementadas na aplicação nem 20% das notas técnicas lançadas desde o lançamento do MOC, seriam necessários meses até que o aplicativo estivesse em dia com as últimas mudanças.

Isso tudo fez o aborrecimento ser acumulado até que encerrei a versão UWP do projeto, porém considerei que seria um desperdício de tempo e esforço simplesmente deletar todo o código, por isso o enviei para o GitHub e até hoje ele está disponível num [repositório público](https://github.com/JaedsonBarbosa/NFeFacilLegacy) para que qualquer um possa estudar, alterar e até republicá-lo.

## A grande pausa e a decisão de retorno

Após uma grande pausa, entrei para um projeto na universidade que me obrigou a aprender tudo dobre computação na nuvem, programação de aplicativos Web e publicação nas lojas de aplicativos do Windows 10 e Android.

Mais alguns meses passam e uma nova versão do MOC é lançada pela SEFAZ, agora atualizada com todas as notas técnicas lançadas até o meio de 2020, ficando de fora apenas algumas poucas lançadas no final de 2020 e início de 2021.

Tudo então estava alinhado, eu já sabia construir aplicações que funcionam em qualquer aparelho e o MOC agora está atualizado com tudo o que preciso para construir uma nova solução. Era hora de iniciar o planejamento de uma nova versão do NF-e Fácil.

## O recomeço

Os erros do passado não podiam ser repetidos, por isso tudo que gerava problemas no passado foi corrido (ou está para ser). A palavra da vez é terceirização, pois não há porquê fazer algo se alguém já o fez.

1. Assinatura XML feita usando uma biblioteca pronta;
2. Abandonado certificado A3 de vez, apenas um certificado A1 guardado no servidor já garante comunicação e assinatura a todos os dispositivos;
3. Codificação e comunicação com impressoras térmicas feitas a partir de bibliotecas customizadas, ainda sem suporte no Android, mas há planos para que o Google resolva isso até a segunda metade de 2022;
4. Compatibilidade com qualquer dispositivo móvel;
5. Compatibilidade com qualquer sistema operacional;
6. Adotado o Google Cloud, responsável por toda a segurança, armazenamento, processamento e comunicação;
7. DANFE NF-e gerado usando a biblioteca [sped-da](https://github.com/nfephp-org/sped-da), mantida por mais de 70 desenvolvedores, garantindo que o DANFE sempre corresponda com todas as normas;
8. Testes automáticos já estão no planejamento de 2022, eles garantirão que o aplicativo não apresente erros incômodos;
9. Usado MOC atualizado para criar a aplicação, que está em dia com todas as notas técnicas emitidas pela SEFAZ.

## Situação atual

A aplicação já faz o básico, ou seja, gerenciamento e emissão já está praticamente pronto. Já é possível importar suas notas emitidas em outros emissores e testar a emissão de algumas notas (recomendo que os testes sejam feitos em homologação), além de ver como estão as telas e como os dados são organizados.

Como explicado antes, os testes automatizados ainda não foram feitos, logo até agora todos os feitos foram manuais, não cobrindo então toda a extensão do aplicativo, porém a construção da aplicação agora está mais organizada, de forma que não há risco de que mudanças em alguma função possam "quebrar" outros pontos do aplicativo, o que era um problema comum na antiga solução.

Caso você teste a emissão e tudo funcione perfeitamente, então podes começar a usar desde já, pois não há risco de que um erro apareça em alguma atualização. Caso ocorra algum problema, ficarei agradecido se você puder me reportar os detalhes do erro usando qualquer um dos canais de comunicação que disponibilizo no rodapé da página.

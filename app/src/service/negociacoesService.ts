import { NegociacoesDoDia } from "../interface/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadosDeHoje => {
                    return new Negociacao (
                        new Date(),
                        dadosDeHoje.vezes,
                        dadosDeHoje.montante
                    )
                })
            })
    }
}
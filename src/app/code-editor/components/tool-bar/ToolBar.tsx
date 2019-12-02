import React from 'react';

import { ItemFluxo } from '../../interfaces/ItemFluxo';
import { ItemToDrag } from '../item-drag/ItemDrag';

export const Toolbar = (props: any) => {
    const itensLogica = props.itensLogica;

    return (
        <div className="mini-scroll-bar" style={{ padding: "10px", flexDirection: "column", overflow: "auto", alignItems: "center", width: 35, height: "100%", borderWidth: 0, borderRightWidth: 0.5, borderColor: "#949494bf", borderStyle: "solid" }}>
            {itensLogica.map((item: ItemFluxo) => {
                return <ItemToDrag
                    isSelecionado={item.isSelecionado}
                    title={item.nome}
                    allowDrag={true}
                    key={item.id}
                    id={item.id}
                    style={{}}
                />;
            })}
        </div>
    );
}
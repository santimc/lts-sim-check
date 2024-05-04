export function checkSimulation (relation, arrow1, arrow2) {
    const check = relation.map( (tuple) => {
        const [s, t] = tuple;
        const transitions = arrow1.filter((element) => {
            return s === element[0];
        });
        if (transitions.length === 0) console.log(`(${s} no tiene transiciónes se cumple vacuamente)`);
        const trans = transitions.map((element) => {
            const [s, a, s_] = element;

            const other_transition = arrow2.filter(e => t === e[0] && a === e[1]);

            if (other_transition.length === 0) {
                console.log(`check (${s}, ${t}) no hay ${s} --${a}--> ${s_}`, arrow2.filter(e => t === e[0]))
                return false
            }

            return other_transition.some(other => relation.map(e => e.join("")).includes([s_, other[2]].join("")));
        })
        return trans;
    });

    return check;
}

export function checkBisimulation(relation, arrow1, arrow2) {
    return checkSimulation(relation, arrow1, arrow2)
        .concat(checkSimulation(relation.map(([s,t]) => [t,s]), arrow2, arrow1))
}

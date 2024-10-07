export function diff(expr, variable) {
    const terms = expr.split(/[\+\-]/).map(term => term.trim());
    const operators = expr.match(/[\+\-]/g) || [];
    
    const resultTerms = terms.map((term, index) => {
        const sign = operators[index - 1] === '-' ? -1 : 1;
        const match = term.match(/([0-9]*)(\*?)([a-z])\^?([0-9]*)/);
        if (match) {
            const coeff = match[1] ? parseInt(match[1]) : 1;
            const varName = match[3];
            const power = match[4] ? parseInt(match[4]) : 1;

            if (varName !== variable) return 0;

            if (power === 1) {
                return sign * coeff;
            } else {
                const newCoeff = sign * coeff * power;
                const newPower = power - 1;
                return `${newCoeff !== 1 ? newCoeff : ''}*${varName}${newPower > 1 ? `^${newPower}` : ''}`;
            }
        } else if (term.trim() === '') {
            return 0;
        } else {
            return 0;
        }
    });

    const result = resultTerms.filter(term => term !== 0).join(' + ').replace(/\+\s*-/g, '- ');
    return result || '0';
}
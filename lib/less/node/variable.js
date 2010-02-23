node.Variable = function Variable(name) { this.name = name };
node.Variable.prototype.eval = function (env) {
    var variables, variable;
    for (var i = 0; i < env.frames.length; i++) {
        variables = env.frames[i].variables();

        for (var j = 0; j < variables.length; j++) {
            variable = variables[j];

            if (variable.name === this.name) {
                if (variable.value.eval) {
                    return variable.value.eval(env);
                } else { return variable.value }
            }
        }
    }
};

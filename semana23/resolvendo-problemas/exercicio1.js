function isOneEdit(edit, reference) {
    if (edit === reference) {
        return false;
    }
    if (edit.length > reference.length + 1 ||
        edit.length < reference.length - 1) {
        return false;
    }
    if (edit.length === reference.length) {
        var differentCharacters = 0;
        for (var i = 0; i < edit.length; i++) {
            if (edit[i] !== reference[i]) {
                differentCharacters++;
            }
        }
        if (differentCharacters === 1) {
            return true;
        }
    }
    if (edit.length === reference.length + 1) {
        if (edit.indexOf(reference) !== -1) {
            return true;
        }
        for (var i = 0; i < reference.length; i++) {
            if (edit[i] !== reference[i]) {
                var newString = edit.replace(edit[i], '');
                if (newString === reference) {
                    return true;
                }
            }
        }
    }
    if (edit.length === reference.length - 1) {
        if (reference.indexOf(edit) !== -1) {
            return true;
        }
        for (var i = 0; i < edit.length; i++) {
            if (edit[i] !== reference[i]) {
                var newString = edit.replace(reference[i], '');
                if (edit === newString) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 'aba', 'aaa' -> true
// 'aaab', 'aaa' -> true
// 'aa', 'aaa' -> true
// 'abb', 'aaa' -> false
// 'aabb', 'aaa' -> false
// 'ab', 'aaa' -> false
console.log(isOneEdit('aa', 'aba'));

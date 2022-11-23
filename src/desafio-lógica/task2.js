    const palavra = "arara";
    const removeSpaces = str => str.split(' ').join('');
    const verificaPalindrome = str => removeSpaces(str) === removeSpaces(str.split('').reverse().join(''));
    const resultados = verificaPalindrome(palavra);
    
    console.log(resultados); 

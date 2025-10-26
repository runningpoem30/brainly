export function random(len : number){
    let options = "dfgdfgar3q49483rhidbfghsdbg395t8h93qht";
    let ans = '';

    for (let i = 0 ; i < len ; i++){
        ans += options[Math.floor(Math.random() * options.length)]
    }
    return ans;
}
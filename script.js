function generate() {
    var quotes = {
        "- Наполеон Хилл, журналист и писатель": '"Что разум человека может постигнуть и во что он может поверить, того он способен достичь."',
        "- Альберт Эйнштейн": '"Стремитесь не к успеху, а к ценностям, которые он дает"',
        '- Майкл Джордан': '"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
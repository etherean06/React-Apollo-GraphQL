const bookA = {
    id: "a",
    title: "Atomic Habits",
    duration: 180,
    read: true,
    rating: 4,
    imageUrl: 'https://m.media-amazon.com/images/I/51eR2+XHi2L._SL500_.jpg',
    author: 'James Clear',
    description: `Random House presents the audiobook edition of Atomic Habits by James Clear, read by the author. 

    A revolutionary system to get 1 percent better every day.
    
    People think when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions - doing two push-ups a day, waking up five minutes early or holding a single short phone call. 
    
    He calls them atomic habits.
    
    In this groundbreaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule or the trick to entering the Goldilocks Zone) and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs and distinguished scientists who have used the science of tiny habits to stay productive, motivated and happy. `
}

const bookB = {
    id: "b",
    title: "The Bitcoin Standard",
    duration: 120,
    read: true,
    rating: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/51bXwP-iB4L._SL500_.jpg',
    author: 'Saifedean Ammous',
    description: `When a pseudonymous programmer introduced “a new electronic cash system that’s fully peer-to-peer, with no trusted third party” to a small Online mailing list in 2008, very few paid attention. Ten years later, and against all odds, this upstart autonomous decentralized software offers an unstoppable and globally-accessible hard money alternative to modern central banks. The Bitcoin Standard analyzes the historical context to the rise of bitcoin, the economic properties that have allowed it to grow quickly, and its likely economic, political, and social implications.`
}

const bookC = {
    id: "c",
    title: "The Subtle Art of Not Giving a F*ck",
    duration: 5,
    read: true,
    rating: 3,
    imageUrl: 'https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg',
    author: 'Mark Manson',
    description: `For decades we've been told that positive thinking is the key to a happy, rich life. "F*ck positivity," Mark Manson says. "Let's be honest, shit is f*cked, and we have to live with it." In his wildly popular Internet blog, Manson doesn't sugarcoat or equivocate. He tells it like it is - a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F*ck is his antidote to the coddling, let's-all-feel-good mind-set that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up. `
}

const bookD = {
    id: "d",
    title: "Think and Grow Rich",
    duration: 9,
    read: true,
    rating: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/61atv8Q26iL._SL500_.jpg',
    author: ' Napoleon Hill',
    description: `Think and Grow Rich is the number-one inspirational and motivational classic for individuals who are interested in furthering their lives and reaching their goals by learning from important figures in history. The text read in this audiobook is the original 1937 edition written by Napoleon Hill and inspired by Andrew Carnegie, and while it has often been reproduced, no updated version has ever been able to compete with the original. It has been used as a roadmap to achievement by countless individuals.`
}

const bookE = {
    id: "E",
    title: "Permanent Record",
    duration: 11,
    read: false,
    imageUrl: 'https://m.media-amazon.com/images/I/51ib1G1AKcL._SL500_.jpg',
    author: 'Edward Snowden',
    description: `Edward Snowden, the man who risked everything to expose the US government’s system of mass surveillance, reveals for the first time the story of his life, including how he helped to build that system and what motivated him to try to bring it down. 

    In 2013, 29-year-old Edward Snowden shocked the world when he broke with the American intelligence establishment and revealed that the United States government was secretly pursuing the means to collect every single phone call, text message, and email. The result would be an unprecedented system of mass surveillance with the ability to pry into the private lives of every person on earth. Six years later, Snowden reveals for the very first time how he helped to build this system and why he was moved to expose it. `
}

const bookF = {
    id: "F",
    title: "Blockchain Revolution",
    duration: 17,
    read: false,
    imageUrl: 'https://m.media-amazon.com/images/I/5109Nkyd12L._SL500_.jpg',
    author: 'James Clear',
    description: `Random House presents the audiobook edition of Atomic Habits by James Clear, read by the author. 

    A revolutionary system to get 1 percent better every day.
    
    People think when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions - doing two push-ups a day, waking up five minutes early or holding a single short phone call. 
    
    He calls them atomic habits.
    
    In this groundbreaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule or the trick to entering the Goldilocks Zone) and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs and distinguished scientists who have used the science of tiny habits to stay productive, motivated and happy. `
}

const bookG = {
    id: "G",
    title: "The Internet of Money",
    duration: 4,
    read: false,
    imageUrl: 'https://m.media-amazon.com/images/I/41V-Os62PnL._SL500_.jpg',
    author: 'Andreas M. Antonopoulos',
    description: `While many books explain the how of bitcoin, The Internet of Money delves into the why of bitcoin. Acclaimed information-security expert and author of Mastering Bitcoin, Andreas M. Antonopoulos examines and contextualizes the significance of bitcoin through a series of essays spanning the exhilarating maturation of this technology.

    Bitcoin, a technological breakthrough quietly introduced to the world in 2008, is transforming much more than finance. Bitcoin is disrupting antiquated industries to bring financial independence to billions worldwide. In this book, Andreas explains why bitcoin is a financial and technological evolution with potential far exceeding the label "digital currency."`
}

const books = [bookA, bookB, bookC, bookD, bookE, bookF, bookG]

const getBookById = (id) => new Promise((resolve) => {
    const [book] = books.filter((book) => {
        return book.id === id
    })
    resolve(book)
})

const getBookByRead = () => new Promise((resolve) => {
    resolve(books.filter(book => book.read === true))
})

const getBookByNotRead = () => new Promise((resolve) => {
    resolve(books.filter(book => book.read === false))
})

const createBooks = ({ title, duration, read }) => {
    const book = {
        id: (new Buffer(title, 'utf8')).toString('base64'),
        title,
        duration,
        read
    }
    books.push(book);
    return book
}

const getBooks = () => new Promise((resolve) => resolve(books))



exports.getBookById = getBookById
exports.getBooks = getBooks
exports.getBookByRead = getBookByRead
exports.getBookByNotRead = getBookByNotRead
exports.createBooks = createBooks
(function () {
    
    var data = [
        {
            name: 'Git Lens',
            description: 'Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.',
            author: 'Eric Amodio | ',
            url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            downloads: '4,660,871 installs | ',
            stars: '4.9 out of 5 stars | ',
            price: 'Free',
            selector: 'p1'

        },
        {
            name: 'Path Intellisense',
            description: 'Visual Studio Code plugin that auto-completes filenames.',
            author: 'Christian Kohler | ',
            url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
            downloads: '2,721,847 installs | ',
            stars: '4.8 out of 5 stars | ',
            price: 'Free',
            selector: 'p2'
        },
        {
            name: 'CSS Peek',
            description: 'Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition.',
            author: 'Pranay Prakash  | ',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: '780,499 installs  | ',
            stars: '3.6 out of 5 stars | ',
            price: 'Free',
            selector: 'p3'
        }
    
    
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function (){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function (){
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    
    var writePackageInfo = function(package) {

        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars'),
            priceEl = getEl(selector + '-price');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
            priceEl.textContent = package.price;

    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();


    var gitlens = new Package(data[0]);
    writePackageInfo(gitlens);

    var pathintellisense = new Package(data[1]);
    writePackageInfo(pathintellisense);

    var csspeek = new Package(data[2]);
    writePackageInfo(csspeek);

}());
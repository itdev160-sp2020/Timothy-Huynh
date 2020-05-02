$(function() {
    var data = [
        {
            id: 1,
            title: 'Time',
            body: 
                'Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back.',
            author: 'Harvey Mackay'
        },
        {
            id: 2,
            title: 'Pain',
            body:
                'God gave us pain to remind us we are alive, so we will learn to value the joys and beauty of the world.',
            author: 'Tom Corr'
        },
        {
            id: 3,
            title: 'Words',
            body:
                'Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.',
            author: 'Patrick Rothfuss'
        },
        {
            id: 4,
            title: 'Peace',
            body:
                'When the power of love overcomes the love of power the world will know peace.',
            author: 'Jimi Hendrix'
        },
        {
            id: 5,
            title: 'Love',
            body:
                'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.',
            author: 'Helen Keller'
        },
        {
            id: 6,
            title: 'Art',
            body:
                'Art enables us to find ourselves and lose ourselves at the same time.',
            author: 'Thomas Merton'
        },
        {
            id: 7,
            title: 'Life',
            body:
                'The greatest glory in living lies not in never falling, but in rising every time we fall.',
            author: 'Nelson Mandela'
        },
        {
            id: 8,
            title: 'Fear',
            body:
                'Everything you\'ve ever wanted is on the other side of fear.',
            author: 'Helen Keller'
        },
        {
            id: 9,
            title: 'Dreams',
            body:
                'All that we see or seem is but a dream within a dream.',
            author: 'Edgar Allan Poe'
        },
        {
            id: 10,
            title: 'Beauty',
            body:
                'Everything has beauty, but not everyone sees it.',
            author: 'Confucius'
        },
        {
            id: 11,
            title: 'Nobility',
            body:
                'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.',
            author: 'Ernest Hemingway'
        },
        {
            id: 12,
            title: 'Change',
            body:
                'You must be the change you wish to see in the world.',
            author: 'Mahatma Gandhi'
        },
        {
            id: 13,
            title: 'Creativity',
            body:
                'Creativity is intelligence having fun.',
            author: 'Albert Einstein'
        },
        {
            id: 14,
            title: 'Learn',
            body:
                'I never lose, I either win or I learn.',
            author: 'Nelson Mandela'
        },
        {
            id: 15,
            title: 'Inspiration',
            body:
                'Always keep your eyes open. Keep watching. Because whatever you see can inspire you.',
            author: 'Grace Coddington'
        },
        {
            id: 16,
            title: 'Creation',
            body:
                'The deepest secret is that life is not a process of discovery, but a process of creation. You are not discovering yourself but creating yourself anew. Seek, therefore, not to find out who you are, seek to determine what you want to be.',
            author: 'Neal Donald Walsch'
        },
        {
            id: 17,
            title: 'Reflection',
            body:
                'Unless you learn to face your own shadows, you will continue to see them in others, because the world outside you is only a reflection of the world inside you.',
            author: 'Carl Jung'
        },
        {
            id: 18,
            title: 'Water',
            body:
                'You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend',
            author: 'Bruce Lee'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i = 0; i < data.length; i++) {
            
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="author"></span>'),
                $navItem = $('<li></li>');
        
        $title.text(data[i].title);
        $body.text(data[i].body);
        $author.text(data[i].author);


        $navItem.attr('id', data[i].id);
        $navItem.text(data[i].title);

        $post.attr('id', postId);
        $post.append($title);
        $post.append($body);
        $post.append($author);

        $posts.append($post);
        $nav.append($navItem);

        $navItem.on('click', function() {
            var id = $(this).attr('id');
            $posts.children().hide();
            $posts.find('#post-' + id).fadeIn();
        });

        $posts.children('.post').hide();
        $intro.fadeIn(1000);
        }
    }

    initPosts();
});
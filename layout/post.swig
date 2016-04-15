<!DOCTYPE html>
<html lang="en">
<head>
    {% include '_partial/head.swig' %}
    <link rel="stylesheet" type="text/css" href="/css/markdown.css">
    <title>{{ page.title}}</title>
</head>
<body>
<div class="container">
    <div class="sidebar">
    </div>
    {% include '_partial/mb-headbar.swig' %}
    {% include '_partial/header.swig' %}
    <div class="post-container">
        <div class="wrapper">
            <div class="article">
                <div class="article-header">
                    <h1>{{ page.title }}</h1>
                    <span>发表于{{ date(page.date, 'YYYY/MM/DD') }} |</span>
                    <span>分类于</span>
                    {% for cat in page.categories %}
                    <span><a href="">{{cat.name}} </a>|</span>
                    {% endfor %}
                </div>
                <div class="article-content">
                    {{ page.content }}
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ url_for('/js/build/post_entry.min.js') }}"></script>
{% block script%}{% endblock %}
</body>
</html>
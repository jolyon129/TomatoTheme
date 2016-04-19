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
        <div class="post-toc">
            {% if page.toc_number === undefine %}
            {% set toc = toc(page.content, { "class": "scroll nav", list_number: "true" }) %}
            {% else %}
            {% set toc = toc(page.content, {"class": "scroll nav", list_number: "tue"}) %}
            {% endif %}
            {% if toc.length <= 1 %}
            <p class="post-toc-empty">{{ __('post.toc_empty') }}</p>
            {% else %}
            <div class="post-toc-content">{{ toc }}</div>
            {% endif %}
        </div>
        <div class="wrapper">
            <div class="article">
                <div class="article-header">
                    <h1>{{ page.title }}</h1>
                    <span>发表于{{ date(page.date, 'YYYY/MM/DD') }} |</span>
                    <span>分类于</span>
                    {% for cat in page.categories %}
                    <span><a href="/categories/{{cat.name}}/#_tabnav">{{cat.name}} </a>|</span>
                    {% endfor %}
                </div>
                <div class="article-content">
                    {{ page.content }}
                </div>
            </div>
            {% include '_partial/loadDS.swig' %}
        </div>

    </div>
</div>
<script src="{{ url_for('/js/build/post_entry.min.js') }}"></script>
</body>
</html>
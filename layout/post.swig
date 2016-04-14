<!DOCTYPE html>
<html lang="en">
<head>
    {% include '_partial/head.swig' %}
    <link rel="stylesheet" type="text/css" href="/css/markdown.css">
    <title>{{ page.title}}</title>
</head>
<body class="night">
<div class="container">
    <div class="sidebar">
    </div>
    {% include '_partial/mb-headbar.swig' %}
    <div class="post-container">
        {% include '_partial/header.swig' %}
        <div class="wrapper">
            <div class="article">
                <div class="article-content">
                    {{ page.content }}
                </div>
            </div>
        </div>
    </div>
    {% block script%}{% endblock %}
</div>
<script src="{{ url_for('/js/build/post_entry.min.js') }}"></script>
</body>
</html>
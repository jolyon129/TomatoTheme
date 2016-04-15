{% extends '_layout.swig' %}
{% import '_macro/tabnav.swig' as tabnav %}

{% block tabnav %}

{% if is_tag() %}

{{ tabnav.render("tags") }}

{% elseif is_category() %}

{{ tabnav.render("cats") }}

{% elseif page.archive %}

{{ tabnav.render("archives") }}

{% endif %}

{% endblock %}

{% block content %}
<div class="archives">
    <ul>
        {% for post in page.posts %}

        {% set post.year = date(post.date, 'YYYY') %}

        {% if post.year !== year %}
        {% set year = post.year %}
        <h2 class="archive-year" id="archive-year-{{ year }}">{{ year }}</h2>
        {% endif %}
        <li>
            <div class="lists-item">
                <div class="title">
                    <a href="{{ url_for(post.path) }}">
                        <span class="post-date">{{ date(post.date, "M/D") }}</span>
                        <span>{{ post.title }}</span>
                    </a>
                </div>
                <div class="item-footer">
                </div>
            </div>
        </li>
        {% endfor %}
    </ul>
</div>
{% endblock %}
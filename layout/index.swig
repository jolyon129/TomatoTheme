{% extends '_layout.swig' %}

{% import '_macro/tabnav.swig' as tabnav %}

{% block title %}{{ config.title }}{% endblock %}

{% block tabnav %}
{{ tabnav.render("index") }}
{% endblock %}

{% block content %}
<div class="index-content">
    <span></span>
    <ul class="post-lists">
        {% for post in page.posts %}
        <li>
            <div class="lists-item">
                <p class="post-date">{{ moment(post.date, "YYYYMMDD", 'zh-cn').fromNow() }}</p>
                <h4><a href="">{{ post.title }}</a></h4>
                <div class="item-footer">
                    <span>分类于: </span>
                    {% for cat in post.categories %}
                    <span><a href="">{{cat.name}} |</a></span>
                    {% endfor %}
                </div>
            </div>
        </li>
        {% endfor %}
    </ul>
    {% if page.prev or page.next %}
    <nav class="pagination">
        {{
            paginator({
                prev_next: true,
                prev_text: '<i class="fa fa-angle-left"></i>',
                next_text: '<i class="fa fa-angle-right"></i>',
                mid_size: 1
            })
        }}
    </nav>
    {% endif %}
</div>

{% endblock %}


{% block script %}
<script>

</script>
{% endblock %}
{% extends '_layout.swig' %}

{% import '_macro/tabnav.swig' as tabnav %}

{% block tabnav %}
    {% if page.title == "tags" %}
    {{ tabnav.render("tags") }}
    {% elseif page.title == "categories" %}
    {{ tabnav.render("cats") }}
    {% endif %}
{% endblock %}

{% block content %}
{% if page.title == "tags" %}
<div class="tagcloud">
    {{ tagcloud({min_font: 16, max_font: 40, amount: 200, color: true, start_color: '#EAA89C', end_color: '#ff6347'}) }}

</div>
{% elseif page.title == "categories" %}
{% include '_partial/cats.swig' %}
{% endif %}

{% endblock %}






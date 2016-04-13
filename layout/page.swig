{% extends '_layout.swig' %}

{% import '_macro/tabnav.swig' as tabnav %}

{% block content %}
{% if page.type === "tags" %}

{% block tabnav %}
{{ tabnav.render("tags") }}
{% endblock %}

<div class="tagcloud">
    {{ tagcloud({min_font: 16, max_font: 40, amount: 200, color: true, start_color: '#EAA89C', end_color: '#ff6347'}) }}
</div>
{% elseif page.type === "categories" %}
{% endif %}
{% endblock %}
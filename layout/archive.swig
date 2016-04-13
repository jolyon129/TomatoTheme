{% extends '_layout.swig' %}
{% import '_macro/tabnav.swig' as tabnav %}

{% block tabnav %}
{{ tabnav.render("archive") }}
{% endblock %}
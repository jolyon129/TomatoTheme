<!DOCTYPE html>
<html lang="en">
<head>
    {% include '_partial/head.swig' %}
    <title>{% block title %}{% endblock %}</title>
</head>
<body class="night">
<div class="container">
    <div class="sidebar">
    </div>
    {% include '_partial/mb-headbar.swig' %}
    <div class="main-container">
        {% include '_partial/aside.swig' %}
        <div id="_tabnav"></div>
        <div class="main-wrapper">
            {% block tabnav %}{% endblock %}
            <div class="tab-content">
                {% block content %}{% endblock %}
            </div>
        </div>
    </div>
</div>
<script>
    window.duoshuoQuery = {short_name: "{{config.duoshuo_shortname}}"};
    window.baidutj = '{{ config.baidutj }}';
</script>
<script src="/js/build/index_entry.min.js"></script>
{% block script%}{% endblock %}
</body>
</html>
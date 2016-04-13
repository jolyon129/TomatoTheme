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
    <div class="headbar">
        <div class="headbar-menu"><a href="">Me</a></div>
    </div>
    <div class="main-container">
        <div class="aside"></div>
        <div class="main-wrapper">
            {% block tabnav %}{% endblock %}
            <div class="tab-content">
                {% block content %}{% endblock %}
            </div>
        </div>
    </div>
</div>
{% block script%}{% endblock %}
</body>
</html>
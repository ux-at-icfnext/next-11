{% if button-group %}
  {% assign button = button-group.btn %}
  {% assign class = button-group.set.class %}
  {% if button-group.set.segment %}
    {% assign seg = "usa-button-group--segmented" %}
  {% endif %}
  <ul class="usa-button-group {{ seg }}">
{% else %}
  <ul class="usa-button-group">
{% endif %}
  {% for btn in button %}
  {% if btn.disabled %}
  <li class="usa-button-group__item">
    <button type="button" class="usa-button {{ btn.class }}" disabled="disabled">{{ btn.text }}</button>
  </li>
  {% elsif btn.aria-disabled %}
  <li class="usa-button-group__item">
    <button type="button" class="usa-button {{ btn.class }}"  aria-disabled="true">{{ btn.text }}</button>
  </li>
  {% else %}
  <li class="usa-button-group__item">
    <a href="{{ btn.link }}" class="usa-button {{ btn.class }}">{{ btn.text }}</a>
  </li>
  {% endif %}
  {% endfor %}
</ul>
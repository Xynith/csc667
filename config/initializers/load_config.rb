require 'rails/all'
require 'yaml'

PRO_CONFIG = YAML.load_file("#{Rails.root}" + "/config/projects.yml")[Rails.env]
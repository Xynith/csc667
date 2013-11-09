json.array!(@appointments) do |appointment|
  json.extract! appointment, :month, :year, :date, :time, :desc
  json.url appointment_url(appointment, format: :json)
end
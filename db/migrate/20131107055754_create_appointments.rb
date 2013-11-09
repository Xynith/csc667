class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :month
      t.integer :year
      t.integer :date
      t.integer :time
      t.string :desc

      t.timestamps
    end
  end
end

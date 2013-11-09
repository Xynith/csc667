class ChangeTimeType < ActiveRecord::Migration
  def self.up
    change_column :appointments, :time, :string
  end
 
  def self.down
    change_column :appointments, :time, :integer
  end
end

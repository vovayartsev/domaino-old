module Modals

  class Base
    %w(title message).each do |m|
      define_method(m) { I18n.t(m, scope: scope) }
    end

    def as_json(*args)
      {title: title, message: message}
    end

    private

    def scope
      "modals.#{self.class.name.demodulize.underscore}"
    end
  end

  # Specific alert instances

  TestAlert = Class.new(Base)
end
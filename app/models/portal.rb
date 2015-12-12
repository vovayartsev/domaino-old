class Portal
  include NoBrainer::Document
  include NoBrainer::Document::Timestamps

  field :domains, type: Array
  field :progress, type: Integer
end